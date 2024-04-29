import React from 'react'
import { EducationTimeLine, Layout, WorkExperinece } from './Index'

const TimeLine = () => {
    return (
        <Layout idName='timeline'>
                <h1 className="text-center">تایم لاین تجربه‌های من</h1>
                <div className="pt-14 flex flex-col gap-20">
                    <WorkExperinece />
                    <EducationTimeLine />
                </div>
        </Layout>
    )
}

export { TimeLine }