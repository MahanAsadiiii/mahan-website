import React from 'react'
import { EducationTimeLine, Layout, WorkExperinece } from './Index'

const TimeLine = () => {
    return (
        <Layout idName='timeline'>
            <div className="pt-14 flex items-start justify-evenly gap-10">
                <WorkExperinece />
                {/* <EducationTimeLine /> */}
            </div>
        </Layout>
    )
}

export { TimeLine }