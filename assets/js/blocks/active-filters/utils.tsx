/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { formatPrice } from '@woocommerce/price-format';
import { RemovableChip } from '@woocommerce/base-components/chip';
import Label from '@woocommerce/base-components/label';
import { getQueryArgs, addQueryArgs, removeQueryArgs } from '@wordpress/url';
import { changeUrl } from '@woocommerce/utils';
import { Icon, closeSmall } from '@wordpress/icons';

/**
 * Format a min/max price range to display.
 *
 * @param {number} minPrice The min price, if set.
 * @param {number} maxPrice The max price, if set.
 */
export const formatPriceRange = ( minPrice: number, maxPrice: number ) => {
	if ( Number.isFinite( minPrice ) && Number.isFinite( maxPrice ) ) {
		return sprintf(
			/* translators: %1$s min price, %2$s max price */
			__( 'Between %1$s and %2$s', 'woo-gutenberg-products-block' ),
			formatPrice( minPrice ),
			formatPrice( maxPrice )
		);
	}

	if ( Number.isFinite( minPrice ) ) {
		return sprintf(
			/* translators: %s min price */
			__( 'From %s', 'woo-gutenberg-products-block' ),
			formatPrice( minPrice )
		);
	}

	return sprintf(
		/* translators: %s max price */
		__( 'Up to %s', 'woo-gutenberg-products-block' ),
		formatPrice( maxPrice )
	);
};

interface RemovableListItemProps {
	type: string;
	name: string;
	prefix?: string | JSX.Element;
	showLabel?: boolean;
	displayStyle: string;
	removeCallback?: () => void;
}

/**
 * Render a removable item in the active filters block list.
 *
 * @param {Object}   listItem                  The removable item to render.
 * @param {string}   listItem.type             Type string.
 * @param {string}   listItem.name             Name string.
 * @param {string}   [listItem.prefix='']      Prefix shown before item name.
 * @param {Function} listItem.removeCallback   Callback to remove item.
 * @param {string}   listItem.displayStyle     Whether it's a list or chips.
 * @param {boolean}  [listItem.showLabel=true] Should the label be shown for
 *                                             this item?
 */
export const renderRemovableListItem = ( {
	type,
	name,
	prefix = '',
	removeCallback = () => null,
	showLabel = true,
	displayStyle,
}: RemovableListItemProps ) => {
	const prefixedName = prefix ? (
		<>
			{ prefix }
			&nbsp;
			{ name }
		</>
	) : (
		name
	);
	const removeText = sprintf(
		/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
		__( 'Remove %s filter', 'woo-gutenberg-products-block' ),
		name
	);

	return (
		<li
			className="wc-block-active-filters__list-item"
			key={ type + ':' + name }
		>
			{ showLabel && (
				<span className="wc-block-active-filters__list-item-type">
					{ type + ': ' }
				</span>
			) }
			{ displayStyle === 'chips' ? (
				<RemovableChip
					element="span"
					text={ prefixedName }
					onRemove={ removeCallback }
					radius="large"
					ariaLabel={ removeText }
				/>
			) : (
				<span className="wc-block-active-filters__list-item-name">
					<button
						className="wc-block-active-filters__list-item-remove"
						onClick={ removeCallback }
					>
						<Icon
							className="wc-block-components-chip__remove-icon"
							icon={ closeSmall }
							size={ 16 }
						/>
						<Label screenReaderLabel={ removeText } />
					</button>
					{ prefixedName }
				</span>
			) }
		</li>
	);
};

/**
 * Update the current URL to update or remove provided query arguments.
 *
 *
 * @param {Array<string|Record<string, string>>} args Args to remove
 */
export const removeArgsFromFilterUrl = (
	...args: ( string | Record< string, string > )[]
) => {
	if ( ! window ) {
		return;
	}

	const url = window.location.href;
	const currentQuery = getQueryArgs( url );
	const cleanUrl = removeQueryArgs( url, ...Object.keys( currentQuery ) );

	args.forEach( ( item ) => {
		if ( typeof item === 'string' ) {
			return delete currentQuery[ item ];
		}
		if ( typeof item === 'object' ) {
			const key = Object.keys( item )[ 0 ];
			const currentQueryValue = currentQuery[ key ]
				.toString()
				.split( ',' );
			currentQuery[ key ] = currentQueryValue
				.filter( ( value ) => value !== item[ key ] )
				.join( ',' );
		}
	} );

	const filteredQuery = Object.fromEntries(
		Object.entries( currentQuery ).filter( ( [ , value ] ) => value )
	);

	const newUrl = addQueryArgs( cleanUrl, filteredQuery );

	changeUrl( newUrl );
};

/**
 * Clean the filter URL.
 */
export const cleanFilterUrl = () => {
	if ( ! window ) {
		return;
	}

	const url = window.location.href;
	const args = getQueryArgs( url );
	const cleanUrl = removeQueryArgs( url, ...Object.keys( args ) );
	const remainingArgs = Object.fromEntries(
		Object.keys( args )
			.filter( ( arg ) => {
				if (
					arg.includes( 'min_price' ) ||
					arg.includes( 'max_price' ) ||
					arg.includes( 'rating_filter' ) ||
					arg.includes( 'filter_' ) ||
					arg.includes( 'query_type_' )
				) {
					return false;
				}

				return true;
			} )
			.map( ( key ) => [ key, args[ key ] ] )
	);

	const newUrl = addQueryArgs( cleanUrl, remainingArgs );

	changeUrl( newUrl );
};
