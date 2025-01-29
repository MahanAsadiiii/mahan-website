import React from 'react'
import { EducationTimeLine, Layout, WorkExperinece } from './Index'

const TimeLine = () => {
    return (
        <Layout idName='timeline'>
            <WorkExperinece />
            {/* <div className="pt-14 flex items-start justify-evenly gap-10">
                <EducationTimeLine />
            </div> */}
        </Layout>
    )
}

export { TimeLine }