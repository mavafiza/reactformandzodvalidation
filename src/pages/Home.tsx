import React from 'react';
import { Layout, Circle } from "../components";
import { botleImg } from "../assets";
import { FlexRow, MyH2, MyImgHome, FlexColHome } from "../styles/HomeStyles";


export default function Home() {
    return (
        <>
        <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 20%' }}>
            <Layout >
                <div>
                    <Circle width="350px" height="350px" color="#3abc6a1a" top="32%" left="7% " zIndex={1} />
                    <Circle width="350px" height="350px" color="#378D7A1a" top="15%" left="31%" zIndex={1} />
                    <Circle width="700px" height="700px" color="#2c8ca21a" top="50%" left="75%" zIndex={1} />
                    <FlexRow>
                        <MyImgHome src={botleImg} alt="" />
                        <FlexColHome>
                            <MyH2>May I have a vermut ?</MyH2>
                        </FlexColHome>
                    </FlexRow>
                </div>
            </Layout>
        </div>
        </>
    );
}