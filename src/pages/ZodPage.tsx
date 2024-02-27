import React from 'react'
import { ZodForm, Layout, Circle } from "../components";
import { FlexRow, MyH2, MySpan } from "../styles/NoZodStyles";



const ZodPage = () => {
  return (
    <>
      <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 10%'  }}>
        <Layout>
          <Circle width="400px" height="400px" color="#378D7A1a" top="32%" left="-4% " zIndex={1} />
          <Circle width="350px" height="350px" color="#97AF5D3a" top="-20%" left="20%" zIndex={1} />
          <FlexRow>
            <MyH2>Zod <MySpan>Form.</MySpan></MyH2>
            <ZodForm />
          </FlexRow>
        </Layout>
      </div>
    </>
  )
}

export default ZodPage