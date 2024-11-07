import Evenements from "./Evenements";
import expretsData from "./data";

function Expert({Data}) {
  return (
    <>
      {console.log(Data)}
      {Data.map(function (user, i) {
        return (
          <>
            <div className="my-10 bg-blue-400">
              <ul className="py-6 list-outside list-disc pl-5">
                <li className="text-lg text-gray-800">{user.nom_complet}</li>
                    <Evenements Data={expretsData} index={i} />
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Expert;
