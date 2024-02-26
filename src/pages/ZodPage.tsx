import React from 'react'
import { ZodForm, Layout, Footer, Circle } from "../components";
import { FlexRow, MyH2, MySpan } from "../styles/NoZodStyles";



const ZodPage = () => {
  return (
    <>
      <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 20%' }}>
        <Layout>
          <Circle width="400px" height="400px" color="#bc3a801a" top="32%" left="-4% " zIndex={1} />
          <Circle width="350px" height="350px" color="#3457b21a" top="-20%" left="20%" zIndex={1} />
          <FlexRow>
            <MyH2>Zod <MySpan>Form.</MySpan></MyH2>
            <ZodForm />
          </FlexRow>
        </Layout>
      </div>
      <Footer />
    </>
  )
}

export default ZodPage