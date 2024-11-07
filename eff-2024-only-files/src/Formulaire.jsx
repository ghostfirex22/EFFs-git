import { useState } from "react";

function Formulaire() {
  const [theme, setTheme] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [coutJournalier, setCoutJournalier] = useState(0);
  const [duree, setDuree] = useState(0);
  const [formulaire, setFormulaire] = useState({
    theme: "",
    data_debut: "",
    data_fin: "",
    cout_journalier: 0,
    duree: 0,
  });

  function confirm() {
    setFormulaire({
      ...formulaire,
      theme: theme,
      data_debut: dateDebut,
      data_fin: dateFin,
      cout_journalier: coutJournalier,
      duree: duree,
    });
  }

  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
        <div>
          <label
            htmlFor="theme"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Theme
          </label>
          <input
            placeholder="Theme"
            type="text"
            onChange={(event) => setTheme(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="dateDebut"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date Debut
          </label>
          <input
            type="date"
            onChange={(event) => setDateDebut(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="dateFin"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date Fin
          </label>
          <input
            type="date"
            onChange={(event) => setDateFin(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="coutJournalier"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Cout Journalier
          </label>
          <input
            type="text"
            placeholder="Cout Journalier"
            onChange={(event) => setCoutJournalier(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="duree"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Duree
          </label>
          <input
            type="text"
            placeholder="Duree"
            onChange={(event) => setDuree(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={confirm}
          className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Confirm
        </button>

        <p className="text-gray-600 text-sm">
          <span className="font-medium">theme</span>: {formulaire.theme}
          <br />
          <span className="font-medium">date_debut</span>:{" "}
          {formulaire.data_debut}
          <br />
          <span className="font-medium">date_fin</span>: {formulaire.data_fin}
          <br />
          <span className="font-medium">description</span>:{""}
          {formulaire.description}
          <br />
          <span className="font-medium">cout_journalier</span>:{""}
          {formulaire.cout_journalier}
          <br />
          <span className="font-medium">duree</span>: {formulaire.duree}
        </p>
      </div>
    </>
  );
}

export default Formulaire;
