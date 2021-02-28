import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import Content from '../comps/Content';
import filters from '../data/filters'



const Index = () => {

  const handle = () => {
    document.getElementById('modal').classList.add('hidden');
  }
  
  
  return (
    <>
    <div className = 'w-full fixed bg-black bg-opacity-50 flex justify-center items-center inset-0 hidden' id = 'modal'>
            <div className = 'bg-white m-8'>
              <div className = 'flex flex-row justify-between m-4'>
                <p className = 'font-bold text-4xl'>Department</p>
                <p className = 'font-bold text-2xl cursor-pointer' onClick = {handle}>X</p>
              </div>
              <hr/>
              <div className = 'grid grid-cols-4'>
                  {filters.department.slice(0, 10).map((d) => {
                      return (
                          <div className = 'm-2'>
                              <p className = 'font-bold'>{d.key}</p>
                              <p>{d.doc_count}</p>
                          </div>
                      );
                  })}
              </div>
            </div>
      </div>
    <div className = 'bg-gray-200 inset-0 w-screen'>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
    </>
  );
}
export default Index
