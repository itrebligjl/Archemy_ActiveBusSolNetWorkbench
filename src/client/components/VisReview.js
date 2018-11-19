import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <form className="box">
    <section className="section">
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td colSpan="4"><h6 className="title">LymphMeter™ v2.0</h6></td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless text-center">
        <tbody>
          <tr>
            <td className="text-center"><p className="text-sm-center"><font color="#c60b21">Applicability Dashboard Log:</font></p></td>
            <td className="text-center"><p className="text-sm-center"><font color="#c60b21">Suitability Dashboard Log:</font></p></td>
          </tr>
          <tr>
            <td className="text-center">
              <div className="select is-multiple">
							<select multiple size="8">
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
							</select>
						</div>
					</td>
					<td class="text-center">
						<div className="select is-multiple">
							<select multiple size="8">
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
							</select>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</section>
  </form>
);
