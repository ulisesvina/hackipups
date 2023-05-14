import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useUser } from '@/context/AuthProvider';
import Spinner from '@/components/Spinner';

const Home = () => {
  const { user, isLoading, logout } = useUser();
  const [linkedUser, setLinkedUser] = useState(null);

  const pets = [
    ["rover-fixed", "emerald"],
    ["cheddar", "latte"],
    ["blas", "snow"]
  ]

  const [currentPetsIndex, setCurrentPetsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPetsIndex((prevIndex) => (prevIndex + 1) % pets.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  async function fetchLinkedUser() {
    const res = await fetch('/api/account/getLinkedUser');
    const data = await res.json();
    setLinkedUser(data.user || null);
  }

  useEffect(() => {
    fetchLinkedUser();
  }, [user]);

  const currentPets = pets[currentPetsIndex];

  return (
    <div>
      {isLoading ? (
        <div className="grid h-50 pt-16 place-items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col h-[75vh]">
          {user ? (
            <div>
              <p className='text-2xl mb-2'>Welcome, {user!.username}!</p>
              <p>
                {JSON.stringify(user)}
              </p>
              <button className='bg-red-600 p-2 my-2 ' onClick={logout}>Logout</button>
            </div>
          ) : (
            <div className="flex flex-col justify-between items-center h-full">
              <p className="text-2xl my-2 text-center">Get started with your virtual pet</p>
              <div className="infinite-landscape flex flex-row justify-center">
                <div className="m-2">
                  <Image
                    src={`/${currentPets[0]}.png`}
                    alt="landscape"
                    width={230}
                    height={150}
                  />
                </div>
                <div className="m-2">
                  <Image
                    src={`/${currentPets[1]}.png`}
                    alt="landscape"
                    width={230}
                    height={230}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end w-full">
                <Link href="/login">
                  <button className="bg-blue-600 text-white w-full py-2 px-4 hover:bg-white hover:text-black">
                    Sign in
                  </button>
                </Link>
                <Link href="/register">
                  <button className="border w-full py-2 px-4 hover:bg-white hover:text-black mt-2">
                    Begin an adventure
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

}

export default Home;