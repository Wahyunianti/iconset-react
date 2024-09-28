import '../index.css';


function modal() {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close-btn" id="closeModalBtn">&times;</span>
                <h2>Edit SVG</h2>
                <form>
                    <div className="editable">
                        <div className="svgedit">

                        </div>
                        <div className="rowedit">
                            <div><label for="">
                                color
                            </label>
                                <input className="inputsearch svgwill colorr" type="color" id="inputColor" name="inputColor"
                                    required />
                            </div>

                            <div>
                                <label for="">
                                    width
                                </label>
                                <input className="inputsearch svgwill" type="number" placeholder="width" id="inputField"
                                    name="inputField" required />

                            </div>

                        </div>
                        <div className="rowedit">
                            <button className="dld" type="submit">Download PNG</button>
                            <button className="dld" type="submit">Copy SVG</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default modal