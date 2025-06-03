import React, { useEffect } from "react";

function DropdownMenuWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const observer = new MutationObserver(() => {
            if (document.body.hasAttribute("data-scroll-locked")) {
                document.body.removeAttribute("data-scroll-locked");
            }
        });

        observer.observe(document.body, { attributes: true });

        return () => observer.disconnect();
    }, []);

    return <>{children}</>;
}

export default DropdownMenuWrapper;