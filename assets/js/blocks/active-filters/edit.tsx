/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import HeadingToolbar from '@woocommerce/editor-components/heading-toolbar';
import BlockTitle from '@woocommerce/editor-components/block-title';
import type { BlockEditProps } from '@wordpress/blocks';
import {
	Disabled,
	PanelBody,
	withSpokenMessages,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToggleGroupControl as ToggleGroupControl,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import Block from './block';
import type { Attributes } from './types';
import './editor.scss';

const Edit = ( {
	attributes,
	setAttributes,
}: BlockEditProps< Attributes > ) => {
	const {
		className,
		displayStyle,
		heading,
		headingLevel,
		chipColor,
		textColor,
	} = attributes;

	const blockProps = useBlockProps( {
		className,
		style: {
			color: textColor,
		},
	} );

	const colorSettings = [
		{
			value: textColor,
			onChange: ( newTextColor: Attributes[ 'textColor' ] ) =>
				setAttributes( {
					textColor: newTextColor,
				} ),
			label: __( 'Text', 'woo-gutenberg-products-block' ),
		},
		...( displayStyle === 'chips'
			? [
					{
						value: chipColor,
						onChange: ( newChipColor: Attributes[ 'chipColor' ] ) =>
							setAttributes( {
								chipColor: newChipColor,
							} ),
						label: __(
							'Chip Color',
							'woo-gutenberg-products-block'
						),
					},
			  ]
			: [] ),
	];

	const getInspectorControls = () => {
		return (
			<InspectorControls key="inspector">
				<PanelBody
					title={ __(
						'Block Settings',
						'woo-gutenberg-products-block'
					) }
				>
					<ToggleGroupControl
						label={ __(
							'Display Style',
							'woo-gutenberg-products-block'
						) }
						value={ displayStyle }
						onChange={ ( value: Attributes[ 'displayStyle' ] ) =>
							setAttributes( {
								displayStyle: value,
							} )
						}
					>
						<ToggleGroupControlOption
							value="list"
							label={ __(
								'List',
								'woo-gutenberg-products-block'
							) }
						/>
						<ToggleGroupControlOption
							value="chips"
							label={ __(
								'Chips',
								'woo-gutenberg-products-block'
							) }
						/>
					</ToggleGroupControl>
					<p>
						{ __(
							'Heading Level',
							'woo-gutenberg-products-block'
						) }
					</p>
					<HeadingToolbar
						isCollapsed={ false }
						minLevel={ 2 }
						maxLevel={ 7 }
						selectedLevel={ headingLevel }
						onChange={ ( newLevel: Attributes[ 'headingLevel' ] ) =>
							setAttributes( { headingLevel: newLevel } )
						}
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color', 'woo-gutenberg-products-block' ) }
					disableCustomColors={ false }
					colorSettings={ colorSettings }
				></PanelColorSettings>
			</InspectorControls>
		);
	};

	return (
		<div { ...blockProps }>
			{ getInspectorControls() }
			<BlockTitle
				className="wc-block-active-filters__title"
				headingLevel={ headingLevel }
				heading={ heading }
				onChange={ ( value: Attributes[ 'heading' ] ) =>
					setAttributes( { heading: value } )
				}
			/>
			<Disabled>
				<Block attributes={ attributes } isEditor={ true } />
			</Disabled>
		</div>
	);
};

export default withSpokenMessages( Edit );
