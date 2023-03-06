import Image from 'next/image'
import Google from '../../public/google.svg'


const Login = () => {

    return (

        <div className='container  mt-52'>

            <div className=''>
                <form action="" className='flex justify-center align-top flex-col p-14 h-auto text-center'>

                    <h1 className='text-center font-extrabold text-4xl text-white '>Bienvenido </h1>
                    <Image
                        src={Google}
                        alt="Google"
                        className='mx-auto mt-5 cursor-pointer'
                        onClick={()=>{
                            alert(33)
                        }}

                    />
                    <div>
                        <h4 className='text-center mt-5 font-light text-2xl text-white '>O Inicia sesion con tu cuenta</h4>
                    </div>

                    <div className=' mb-3 w-1/2 mx-auto
                    '>
                        <input type="email" className=
                            'form-control mb-3 bg-transparent border-b-2  border  text-white text-6xl' name="" id="" />
                        <input type="password" className='mb-3 form-control bg-transparent text-white ' name="" id="" />
                        <input type="button" className='
                        btn btn-primary w-full' value={"Iniciar sesion"} />

                    </div>
                </form>

            </div>



        </div>


    )
}

export default Login
