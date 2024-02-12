import About from "../components/About/About";
import Cart from "../components/Cart/Cart";
import PartyOptions from "../components/PartyOptions/PartyOptions";
import SubmitOrder from "../components/SubmitOrder/SubmitOrder";

const appComponents = [
    {
        path: '/',
        name: <About />,
    },
    {
        path: '/party-options',
        name: <PartyOptions />,
    },
    {
        path: '/cart',
        name: <Cart />,
    },
    {
        path: '/submit-order',
        name: <SubmitOrder />,
    },
];

export default appComponents