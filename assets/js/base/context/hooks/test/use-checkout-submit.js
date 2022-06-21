/**
 * External dependencies
 */
import TestRenderer, { act } from 'react-test-renderer';
import { createRegistry, RegistryProvider } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { useCheckoutSubmit } from '../use-checkout-submit';
import {
	CHECKOUT_STORE_KEY,
	config as checkoutStoreConfig,
} from '../../../../data/checkout';

const mockUseCheckoutEventsContext = {
	onSubmit: jest.fn(),
};
const mockUsePaymentMethodDataContext = {
	activePaymentMethod: '',
	currentStatus: {
		isDoingExpressPayment: false,
	},
};

jest.mock( '../../providers/cart-checkout/checkout-events', () => ( {
	useCheckoutEventsContext: () => mockUseCheckoutEventsContext,
} ) );

jest.mock( '../../providers/cart-checkout/payment-methods', () => ( {
	usePaymentMethodDataContext: () => mockUsePaymentMethodDataContext,
} ) );

describe( 'useCheckoutSubmit', () => {
	let registry, renderer;

	const getWrappedComponents = ( Component ) => (
		<RegistryProvider value={ registry }>
			<Component />
		</RegistryProvider>
	);

	const getTestComponent = () => () => {
		const data = useCheckoutSubmit();
		return <div { ...data } />;
	};

	beforeEach( () => {
		registry = createRegistry( {
			[ CHECKOUT_STORE_KEY ]: checkoutStoreConfig,
		} );
		renderer = null;
	} );

	it( 'onSubmit calls the correct action in the checkout context', () => {
		const TestComponent = getTestComponent();

		act( () => {
			renderer = TestRenderer.create(
				getWrappedComponents( TestComponent )
			);
		} );

		//eslint-disable-next-line testing-library/await-async-query
		const { onSubmit } = renderer.root.findByType( 'div' ).props;

		onSubmit();

		expect( mockUseCheckoutEventsContext.onSubmit ).toHaveBeenCalledTimes(
			1
		);
	} );
} );
