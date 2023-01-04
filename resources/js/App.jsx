import React from "react";
import { createRoot } from "react-dom/client";

// components
import PageHeader from "./components/pageHeader";
import PageBody from "./components/pageBody";
import SizeOptions from "./components/sizeOptions";
import SendToWhatsapp from "./components/sendToWhatsapp";
import ResponsiveCart from "./components/responsiveCart";
import ModalCart from "./components/modalCart";

// redux
import { Provider } from "react-redux";
import reduxStore from "./redux/store";

export default function App({store}) {
    return (
        <Provider store={reduxStore}>
            <PageHeader image={store["logo"]} />
            <div className="page-container">
                <PageBody store={store} />
                <SizeOptions />
                <SendToWhatsapp whatsapp={store['whatsapp']} />
                <ModalCart delivery_fees={store["delivery_fees"]} />
            </div>
            <ResponsiveCart delivery_fees={store["delivery_fees"]} />
        </Provider>
    );
}

if (document.getElementById("root")) {
    var data = document.getElementById("root").getAttribute("data");
    createRoot(document.getElementById("root"))
        .render(<App store={JSON.parse(data)} />);
}
