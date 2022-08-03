import Head from "next/head"
import ReactLoading from "react-loading"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Random Experiments by Arko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen w-screen flex flex-col space-y-2 items-center justify-center">
        <div className="flex flex-row space-x-2">
          {/* Face 1 */}
          <div className="flex flex-col space-y-2 items-center border border-gray-300 rounded-md p-4">
            <div className="flex flex-row space-x-4">
              <ReactLoading type={'spin'} color={'#6667AB'} height={'24px'} width={'24px'} delay={'1000'} />
              <ReactLoading type={'spin'} color={'#6667AB'} height={'24px'} width={'24px'} />
            </div>
            <ReactLoading type={'bars'} color={'#6667AB'} height={'30px'} width={'30px'} />
          </div>

          {/* Face 2 */}
          <div className="flex flex-col space-y-2 items-center border border-gray-300 rounded-md p-4">
            <div className="flex flex-row space-x-4">
              <ReactLoading type={'cubes'} color={'#6667AB'} height={'24px'} width={'24px'} delay={'1000'} />
              <ReactLoading type={'spin'} color={'#6667AB'} height={'24px'} width={'24px'} />
            </div>
            <ReactLoading type={'bars'} color={'#6667AB'} height={'30px'} width={'30px'} />
          </div>

          {/* Face 3 */}
          <div className="flex flex-col space-y-2 items-center border border-gray-300 rounded-md p-4">
            <div className="flex flex-row space-x-4">
              <ReactLoading type={'cubes'} color={'#6667AB'} height={'24px'} width={'24px'} />
              <ReactLoading type={'cubes'} color={'#6667AB'} height={'24px'} width={'24px'} />
            </div>
            <ReactLoading type={'cubes'} color={'#6667AB'} height={'30px'} width={'30px'} />
          </div>

          {/* Face 4 */}
          <div className="flex flex-col space-y-2 items-center border border-gray-300 rounded-md p-4">
            <div className="flex flex-row space-x-4">
              <ReactLoading type={'cubes'} color={'#6667AB'} height={'24px'} width={'24px'} delay={'1000'} />
              <ReactLoading type={'cubes'} color={'#6667AB'} height={'24px'} width={'24px'} />
            </div>
            <ReactLoading type={'spin'} color={'#6667AB'} height={'30px'} width={'30px'} />
          </div>

          {/* Face 5 */}
          <div className="flex flex-col space-y-2 items-center border border-gray-300 rounded-md p-4">
            <div className="flex flex-row space-x-4">
              <ReactLoading type={'cubes'} color={'#6667AB'} height={'24px'} width={'24px'} delay={'1000'} />
              <ReactLoading type={'spin'} color={'#6667AB'} height={'24px'} width={'24px'} />
            </div>
            <ReactLoading type={'cubes'} color={'#6667AB'} height={'30px'} width={'30px'} />
          </div>

          {/* Face 6 */}
          <div className="flex flex-col space-y-2 items-center border border-gray-300 rounded-md p-4">
            <div className="flex flex-row space-x-4">
              <ReactLoading type={'spin'} color={'#6667AB'} height={'24px'} width={'24px'} />
              <ReactLoading type={'spin'} color={'#6667AB'} height={'24px'} width={'24px'} />
            </div>
            <ReactLoading type={'cubes'} color={'#6667AB'} height={'30px'} width={'30px'} />
          </div>

          {/* Face 7 */}
          <div className="flex flex-col space-y-2 items-center border border-gray-300 rounded-md p-4">
            <div className="flex flex-row space-x-4">
              <ReactLoading type={'spokes'} color={'#6667AB'} height={'24px'} width={'24px'} delay={'1000'} />
              <ReactLoading type={'spin'} color={'#6667AB'} height={'24px'} width={'24px'} />
            </div>
            <ReactLoading type={'cubes'} color={'#6667AB'} height={'30px'} width={'30px'} />
          </div>

          {/* Face 8 */}
          <div className="flex flex-col space-y-2 items-center border border-gray-300 rounded-md p-4">
            <div className="flex flex-row space-x-4">
              <ReactLoading type={'cubes'} color={'#6667AB'} height={'24px'} width={'24px'} delay={'1000'} />
              <ReactLoading type={'spin'} color={'#6667AB'} height={'24px'} width={'24px'} />
            </div>
            <ReactLoading type={'cubes'} color={'#6667AB'} height={'30px'} width={'30px'} />
          </div>
        </div>
      </div>
    </div>
  )
}
