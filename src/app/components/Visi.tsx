import React from 'react'

type Props = {}

const Visi = (props: Props) => {
  return (
    <div className='text-white py-10 px-40 flex flex-col bg-orange-600 justify-center items-center h-[400px]'>
        <p className='text-3xl font-bold'>Visi & Misi</p>
        <div className='grid lg:grid-cols-2 w-full h-full mt-5 '>
            <div className=' flex flex-col px-4 space-y-4'>
                <p className='text-xl font-semibold'>Visi</p>
                <p className='text-base text-justify font-light'>
                    Menjadikan HMIF sebagai wadah bagi anggota maupun calon anggota untuk mengembangkan diri dalam bidang akademik maupun non akademik dan menjadikan HMIF ITI menjadi organisasi yang aktif solutif dan produktif secara internal maupun eksternal demi terwujudnya Tri Dharma Perguruan Tinggi
                </p>
            </div>
            <div className=' flex flex-col px-4 space-y-4'>
                <p className='text-xl font-semibold'>Misi</p>
                <div className='text-base text-justify font-light flex flex-col gap-3'> 
                    <p>1.Meningkatkan kualitas secara akademik setiap anggota maupun calon anggota HMIF ITI</p>
                    <p>2.Meningkatkan kualitas kegiatan sosial mahasiswa</p>
                    <p>3.Membangun jaringan & kemitraan dengan pihak kampus organisasi kemahasiswaan lain & masyarakat umum </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Visi