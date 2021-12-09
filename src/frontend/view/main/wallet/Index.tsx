import React from "react"
import "./index.css"
const Index = () => {

    return (
        <>
            <div className="flex flex-col items-start wrapper ">
                <div className="my-wallet">My Wallet</div>
                <div className="balance-wrapper">
                    <div className="base-balance total ">
                        <span className="balance-text">Total balance</span>
                        <span className="balance-number">${'111'}</span>
                    </div>
                    <div className="base-balance balance ">
                        <span className="balance-text">Balance ICP</span>
                        <span className="balance-number">{'111'}</span>
                    </div>
                    <div className="base-balance ndp ">
                        <span className="balance-text">NDP</span>
                        <span className="balance-number">{'1111'}</span>
                    </div>
                    <div className="base-balance nft ">
                        <span className="balance-text">NFTs</span>
                        <span className="balance-number">{'22222'}</span>
                    </div>
                </div>
                <div className="token-table">
                    <div className="mb-5">
                        <span className="table-button">Token</span>
                        <span className="table-button table-button2">NFTs</span>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex justify-center">
                            <span className="table-token">Token</span>
                            <span className="table-balance">Balance</span>
                            <span className="table-price">Price</span>
                            <span className="table-action">Action</span>
                        </div>
                        <div>
                            <span>Token</span>
                            <span>Balance</span>
                            <span>Price</span>
                            <span>Action</span>
                        </div>
                    </div>
                </div>
                <div>
                    card
                </div>
            </div>
        </>
    )
}
export default Index