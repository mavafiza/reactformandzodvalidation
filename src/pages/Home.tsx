import React from 'react';
import { Layout, Button, Circle } from "../components";
import { landingGirl } from "../assets";
import { FlexRow, MyH2, MyImgHome, MyP, FlexColHome } from "../styles/HomeStyles";


export default function Home() {
    return (
        <>
        <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 20%' }}>
            <Layout >
                <div>
                    <Circle width="350px" height="350px" color="#bc3a801a" top="32%" left="7% " zIndex={1} />
                    <Circle width="350px" height="350px" color="#3457b21a" top="15%" left="31%" zIndex={1} />
                    <Circle width="700px" height="700px" color="#3457b21a" top="50%" left="75%" zIndex={1} />
                    <FlexRow>
                        <MyImgHome src={landingGirl} alt="" />
                        <FlexColHome>
                            <MyH2>May I have a vermut ?</MyH2>
                            <MyP>How old are you ?</MyP>
                            {/* <Button width= "25%" height = "40px" /> */}
                        </FlexColHome>
                    </FlexRow>
                </div>
            </Layout>
        </div>
        </>
    );
}