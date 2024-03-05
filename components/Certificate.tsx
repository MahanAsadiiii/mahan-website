import { CertificateDetails } from '@/static/Certificate'
import { Layout } from '../components/Index'
import Image from 'next/image'
import Link from 'next/link'

const Certificate = () => {
  return (
    <Layout idName='certificate'>
      <div className="flex flex-col items-center">
        <h1 className='text-3xl md:text-4xl'>گواهی</h1>
        <div className="grid grid-cols-1 pt-10 mx-4">
          {CertificateDetails.map((certificate, index) => {
            return (
              <div key={index} className="relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] h-80 hover:scale-105 ease-in duration-300 px-2 py-3 max-h-64 ">
                <Image src={certificate.imageName} height={240} alt='certificate-image' className='rounded-md group-hover:opacity-5' loading='lazy'/>
                <div className="hidden group-hover:flex flex-col justify-between items-center absolute w-full h-full px-6 py-4 duration-300 ease-in-out">
                  <h3 className='text-xl lg:text-xl text-white tracking-wider text-center '>{certificate.name}</h3>
                  <ul style={{ direction: 'ltr' }} className='flex-col items-center justify-center pb-4 pt-2 ltr'>
                    {certificate.skills.map((skill, index) => {
                      return (
                        <li key={index} className='text-base text-center text-white list-disc py-1 cursor-default'>{skill}</li>
                      )
                    })}
                  </ul>
                  <Link target='_blank' href={certificate.link} className=' text-center py-3 rounded-lg bg-white text-gray-700 cursor-pointer w-full'>{certificate.btnContent}</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export { Certificate }