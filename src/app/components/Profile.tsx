import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='h-[500px] bg-white flex flex-col justify-center text-center px-80 text-black space-y-10'>
        <div className='space-y-4'>
            <p className='text-3xl font-bold'>Gambaran Umum</p>
            <p className='font-extralight'>Himpunan Mahasiswa Teknik Informatika (HMIF) - Institut Teknologi Indonesia merupakan organisasi mahasiswa program studi Teknik Informatika di Institut Teknologi Indonesia yang bertujuan mengembangkan potensi mahasiswa Teknik Informatika dengan berlandaskan Tri Dharma Perguruan Tinggi</p>
        </div>
        <div className=''>
            <p className='text-base font-semibold text-gray-500'>TUJUAN</p>
            <p className='text-3xl font-bold pb-4'>Melangkah Bersama Menuju Kemenangan</p>
            <p className='font-extralight'>Menjadikan HMIF sebagai wadah bagi anggota maupun calon anggota untuk mengembangkan diri dalam bidang akademik maupun non akademik dan menjadikan HMIF ITI menjadi organisasi yang aktif solutif dan produkif secara internal maupun eksternal demi terwujudnya Tri Dharma Perguruan Tinggi</p>
        </div>
    </div>
  )
}

export default Profile