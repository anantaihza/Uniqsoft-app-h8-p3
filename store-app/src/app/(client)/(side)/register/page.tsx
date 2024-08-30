import { BASE_URL } from '@/constants';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function page() {
  const handleRegister = async (formData: FormData) => {
    'use server';

    const name = formData.get('name');
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await fetch(BASE_URL + '/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, email, password }),
    });

    const result = await res.json();

    if (!res.ok) {
      return redirect('/register?error=' + result.message);
    }

    return redirect('/login');
  };

  return (
    <div className="min-h-screen container mx-auto py-20 px-10 lg:px-32 flex gap-20 flex-row-reverse">
      <div className="hidden lg:block w-[55%] min-h-96 bg-[#FE9345] text-white rounded-xl relative">
        <div className="relative z-20 px-20 py-16">
          <h6 className="font-bold text-xl">Best Clothing Store</h6>
          <h2 className="font-black text-6xl">UniqSoft</h2>
          <p className="mt-2 font-bold">
            Our collection features a wide range of clothing designed to provide
            a soft and comfortable feel against your skin
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/Online-Shopping.png"
            className="w-[80%] absolute -bottom-6"
            alt=""
          />
        </div>
      </div>
      <div className="w-[100%] lg:w-[45%] min-h-96 text-center text-[#303459] my-auto">
        <h3 className="font-extrabold text-2xl">
          Uniq<span className="text-[#FE9345]">Soft</span>
        </h3>
        <h2 className="font-black text-5xl mt-5">Welcome to Store</h2>
        <p className="text-[#A3A2A8] mt-3">Please create your account</p>

        <form action={handleRegister} className="mt-10 flex flex-col gap-5">
          <label className="input py-7 input-bordered flex items-center gap-4 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="name"
              className="grow"
              placeholder="Name"
            />
          </label>
          <label className="input py-7 input-bordered flex items-center gap-4 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Username"
            />
          </label>
          <label className="input py-7 input-bordered flex items-center gap-4 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              name="email"
              className="grow"
              placeholder="Email"
            />
          </label>
          <label className="input py-7 input-bordered flex items-center gap-4 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Password"
            />
          </label>

          <button className="btn-block mt-10 bg-[#FE9345] rounded-xl text-white py-4 font-bold hover:bg-[#FCC89F]">
            Register
          </button>
        </form>
        <p className="text-[#A3A2A8] mt-12">
          You have an account?{' '}
          <Link href="/login" className="text-[#FE9345]">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
}
