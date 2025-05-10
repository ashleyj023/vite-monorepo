import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Button, Header } from '@repo/ui';
function App() {
    return (_jsxs("div", { children: [_jsx(Header, { title: "My New App" }), _jsx("div", { style: { padding: 40 }, children: _jsx(Card, { title: "Shared UI Component", children: _jsx(Button, { children: "Click Me" }) }) })] }));
}
export default App;
