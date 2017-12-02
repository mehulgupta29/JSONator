import React from 'react';
import Dropzone from 'react-dropzone';
import {each, map} from 'lodash';
var Guid = require('guid');

class FileLoader extends React.Component {
	constructor() {
		super();

		this.state = {
			accepted: [],
			rejected: [],
			fileContents: null
		}
	}

	parser(file) {
		let self = this;
		const reader = new FileReader();
		reader.onload = function (e) {
			// const result = JSON.parse(e.target.result);
			// const formatted = JSON.stringify(result, null, 2);
			//
			// function checkProperties(property, object) {
			//     property in object ? console.log('Child detected') : missingProps.push(property);
			// }
			// checkProperties('keyExists', result);
			// checkProperties('keyNotExist', result);

			let fileObject = {
				text: reader.result,
				completed: false,
				merged: false,
				selected: false,
				isDirty: false,
				id: Guid.raw(),
				fileName: file.name,
				file: file
			};

			self.props.actions.addFile(fileObject);
			// self.props.actions.addTodo(fileObject);
		};
		reader.readAsText(file);
	}

	render() {
		return (
			<div>
				File Loader
				<section>
					<div className="dropzone">
						<Dropzone
							accept="application/json"
							onDrop={(accepted, rejected) => {
								this.setState({accepted, rejected});
							}}
						>
							<p>Try dropping some files here, or click to select files to upload.</p>
							<p>Only *.json files will be accepted</p>
						</Dropzone>
					</div>
					<aside>
						<p>Accepted files</p>
						<ul>
							{
								this.state.accepted.map(f => <button key={f.name} onClick={(event) => {
									this.parser(f)
								}}>{f.name} - {f.size} bytes</button>)
							}
						</ul>
						<p>Rejected files</p>
						<ul>
							{
								this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
							}
						</ul>
					</aside>
				</section>
				<section>

				</section>
			</div>
		)
	}
}

export default FileLoader;
