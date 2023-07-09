import { Dna } from 'react-loader-spinner';

const Loader = () => {
    return ( 
        <div className="border bg-black text-white h-screen w-full flex justify-center items-center">
            
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />

        </div>
     );
}
 
export default Loader;