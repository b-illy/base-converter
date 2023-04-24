const bases = [10, 16, 2];

let convert = (base) => {
    // for each input box...
    for (let i = 0; i < bases.length; i++) {
        // don't modify the box that the user just inputted in
        // if (bases[i] == base) {
        //     continue;
        // }

        // read raw inputted value
        let value = document.getElementById(base.toString()).value;

        // if the box was cleared, clear them all
        if (value === "") {
            document.getElementById(bases[i].toString()).value = "";
            // clear the warning too
            document.getElementById("warning").style.display = "none";
            
            continue;
        }

        // convert input to int and convert to new base
        let valueInt = parseInt(value, base);
        let convertedStr = valueInt.toString(bases[i]);

        // show warning and don't update other boxes if NaN
        if (isNaN(valueInt)) {
            document.getElementById("warning").style.display = "block";
            break;
        } else {
            document.getElementById("warning").style.display = "none";
        }

        // update text of this box
        document.getElementById(bases[i].toString()).value = convertedStr;
    }
}