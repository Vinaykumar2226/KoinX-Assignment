// TradingViewWidget.jsx
import React, { useState, useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    container.current.innerHTML = " ";

    const existingScript = document.getElementById("tradingview-widget-script");
    if (existingScript && existingScript.parentNode === container.current) {
      container.current.removeChild(existingScript);
    }

    const script = document.createElement("script");
    script.id = "tradingview-widget-script";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "auto",
          "height": "400",
          "symbol": "COINBASE:BTCUSD",
          "interval": "W",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);

    return () => {
      if (script.parentNode === container.current) {
        container.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
