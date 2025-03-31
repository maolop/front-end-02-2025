import "./App.css";

function App() {
	return (
		<>
			<p>
				Tee rohelise tagataustaga nupp, mille sees on helehall tekst
				<br />
				Hiirega peale minnes muuda nupu kõrgust (nt height: 100px) –
				css-klass:hover
				<br />
				Hiirega vajutades muuda cursorit haaramiseks (cursor: grab) –
				css-klass:active
			</p>
			<button>Nupp</button>

			<p>
				Tee sinine tekst, millele hiirega peale minnes muuda selle teksti suurus
				suuremaks (font-size: 24px) – hover
				<br />
				Pane sinine tekst kaldkirja (võimalik teha nii HTML-s kui CSS-s)
			</p>
			<p className="blue-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl,
				dictum quis ullamcorper sed, egestas fermentum urna. Suspendisse ac leo
				pellentesque, tristique nisl sit amet, lacinia neque. In vestibulum
				bibendum nulla sed congue. Cras consequat rhoncus nunc, id pretium elit.
				Curabitur id aliquet sapien. Mauris fringilla ut magna id vulputate.
				Nulla facilisi. Nullam elementum ipsum vel ipsum vulputate tincidunt.
			</p>

			<p>
				Tee roheline tekst
				<br />
				Pane roheline tekst tugevaks kirjaviisiks (bold)
				<br />
				Pane rohelise teksti piirjoon (border) punaseks, mis läheb hiirega peale
				minnes pruuniks
			</p>
			<p className="green-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl,
				dictum quis ullamcorper sed, egestas fermentum urna. Suspendisse ac leo
				pellentesque, tristique nisl sit amet, lacinia neque. In vestibulum
				bibendum nulla sed congue. Cras consequat rhoncus nunc, id pretium elit.
				Curabitur id aliquet sapien. Mauris fringilla ut magna id vulputate.
				Nulla facilisi. Nullam elementum ipsum vel ipsum vulputate tincidunt.
			</p>

			<p>
				Võta internetist pildi url, millel on .jpg või .png või .jpeg lõpp
				<br />
				Anna pildile kindel laius-pikkus
				<br />
				Pane pilt lehe paremasse äärde css klassi kaudu
				<br />
				Muuda pildi nurgad ümaraks border-radius abil kui hiirega peale lähed
				<br />
				Muuda pildi läbipaistvus (opacity) kui pildil hiirt peal hoiad
			</p>
			<div className="beluga-cat-div">
				<img
					className="beluga-cat-img"
					src="https://i.redd.it/1rxdhjjf67791.jpg"
					alt="Beluga Cat"
				/>
			</div>

			<p>Tabel</p>
			<table>
				<tr>
					<th className="company">Company</th>
					<th className="contact">Contact</th>
					<th className="country">Country</th>
				</tr>
				<tr>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
				</tr>
				<tr>
					<td>Centro Comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
				</tr>
				<tr>
					<td>Ernst Handel</td>
					<td>Roland Mendel</td>
					<td>Austria</td>
				</tr>
				<tr>
					<td>Island Trading</td>
					<td>Helen Bennett</td>
					<td>UK</td>
				</tr>
				<tr>
					<td>Laughing Baccus Winecellars</td>
					<td>Yoshi Tannamuri</td>
					<td>Canada</td>
				</tr>
				<tr>
					<td>Magazini Alimentari Riuniti</td>
					<td>Giovanni Rovelli</td>
					<td>Italiy</td>
				</tr>
			</table>

			<p>Youtube Video</p>
			<iframe
				width="800"
				height="600"
				src="https://www.youtube.com/embed/dQw4w9WgXcQ"
			></iframe>
		</>
	);
}

export default App;
