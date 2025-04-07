// Raamatud2:	// https://www.freetestapi.com/api/v1/books
// Autod2:		// https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100
// Riigid:		// https://restcountries.com/v3.1/all?fields=name
// Riigid2:		// https://www.freetestapi.com/api/v1/countries
// Ujutused:	// https://environment.data.gov.uk/flood-monitoring/id/floods
// Sonastik:	// https://marineregions.org/rest/getGazetteerTypes.json
// Tarnija3:	ISE OTSIDA

import { Link } from "react-router-dom";

function ApiHome() {
	return (
		<>
			<div>
				<Link to="/autod2">
					<button>Autod2</button>
				</Link>
				<Link to="/pakiautomaadid">
					<button>Pakiautomaadid</button>
				</Link>
				<Link to="/raamatud1">
					<button>Raamatud1</button>
				</Link>
				<Link to="/raamatud2">
					<button>Raamatud2</button>
				</Link>
				<Link to="/riigid1">
					<button>Riigid1</button>
				</Link>
				<Link to="/riigid2">
					<button>Riigid2</button>
				</Link>
				<Link to="/sonastik">
					<button>Sõnastik</button>
				</Link>
				<Link to="/tarnija1">
					<button>Tarnija1</button>
				</Link>
				<Link to="/tarnija2">
					<button>Tarnija2</button>
				</Link>
				<Link to="/tarnija3">
					<button>Tarnija3</button>
				</Link>
				<Link to="/ujutused">
					<button>Ujutused</button>
				</Link>
			</div>
		</>
	);
}

export default ApiHome;
