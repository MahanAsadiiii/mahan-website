import { CertificateDetails } from '@/static/Certificate'
import { Layout } from '../components/Index'
import Image from 'next/image'
import Link from 'next/link'
import { HumanShape3, HumanShape5 } from '@/utilities/Image'
import { useTheme } from '@/context/ThemeContext'

const Certificate = () => {
  const { dark } = useTheme()
  return (
    <Layout idName='certificate'>
      <h1 className='text-center mt-5'>گواهی</h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-fit">
          <div className="grid grid-cols-1  mx-4">
            {CertificateDetails.map((certificate, index) => {
              return (
                <div key={index} className="relative flex items-center justify-center shadow-md border-2 border-gray-500 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] h-80 hover:scale-105 ease-in duration-300 p-3 max-h-64">
                  <Image src={certificate.imageName} height={240} alt='certificate-image' className='rounded-md group-hover:opacity-5' loading='lazy' />
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
        <div className="flex justify-center mt-10 md:w-1/2">
          {dark ?
            <Image src={HumanShape5} alt='' className=' ' />
            :
            <Image src={HumanShape3} alt='' className='' />
          }
        </div>
      </div>
    </Layout>
  )
}

export { Certificate }