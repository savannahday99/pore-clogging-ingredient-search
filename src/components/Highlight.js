import latinize from "latinize";
import React, { Component } from "react";
import styles from "./Highlight.css";
import Highlighter from "./Highlighter";

export default class Highlight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: [
        "Acetylated Lanolin",
        "Acetylated Lanolin Alcohol",
        "Algae Extract",
        "Algin",
        "Butyl Stearate",
        "Carrageenan",
        "Cetyl Acetate",
        "Cetearyl Alcohol + Ceteareth 20",
        "Chondrus Crispus (aka Irish Moss or Carageenan Moss)",
        "Chlorella",
        "Coal Tar",
        "Cocoa Butter",
        "Coconut Alkanes",
        "Coconut Butter",
        "Coconut Oil",
        "Colloidal Sulfur",
        "Cotton Awws Oil",
        "Cotton Seed Oil",
        "D & C Red #17",
        "D & C Red #21",
        "D & C Red #3",
        "D & C Red #30",
        "D & C Red #36",
        "Decyl Oleate",
        "Dioctyl Succinate",
        "Disodium Monooleamido PEG 2- Sulfosuccinate",
        "Ethoxylated Lanolin",
        "Ethylhexyl Palmitate",
        "Glyceryl Stearate SE",
        "Glyceryl-3 Diisostearate",
        "Hexadecyl Alcohol",
        "Hydrogenated Vegetable Oil",
        "Isocetyl Alcohol",
        "Isocetyl Stearate",
        "Isodecyl Oleate",
        "Isopropyl Isostearate",
        "Isopropyl Linolate",
        "Isopropyl Myristate",
        "Isopropyl Palmitate",
        "Isostearyl Isostearate",
        "Isostearyl Neopentanoate",
        "Kelp",
        "Laminaria Digitata Extract",
        "Laminaria Saccharina",
        "Laureth-23",
        "Laureth-4",
        "Lauric Acid",
        "Mink Oil",
        "Myristic Acid",
        "Myristyl Lactate",
        "Myristyl Myristate",
        "Octyl Palmitate",
        "Octyl Stearate",
        "Oleth-3",
        "Oleyl Alcohol",
        "PEG 16 Lanolin",
        "PEG 200 Dilaurate",
        "PEG 8 Stearate",
        "PG Monostearate",
        "PPG 2 Myristyl Propionate",
        "Plankton",
        "Polyglyceryl-3 Diisostearate",
        "Potassium Chloride",
        "Propylene Glycol Monostearate",
        "Red Algae",
        "Seaweed",
        "Sea Whip Extract",
        "Shark Liver Oil (Squalene)",
        "Shea Butter",
        "Sodium Laureth Sulfate",
        "Sodium Lauryl Sulfate",
        "Solulan 16",
        "Sorbitan Oleate",
        "Soybean Oil",
        "Spirulina",
        "Steareth 10",
        "Stearic Acid Tea",
        "Stearyl Heptanoate",
        "Sulfated Castor Oil",
        "Sulfated Jojoba Oil",
        "Wheat Germ Glyceride",
        "Wheat Germ Oil",
        "Xylene",
      ],
      textToHighlight: ``,
      activeIndex: -1,
      caseSensitive: false,
    };
  }
  render() {
    const { ...props } = this.props;
    const {
      activeIndex,
      caseSensitive,
      searchText,
      textToHighlight,
    } = this.state;
    const searchWords = searchText;

    return (
      <div {...props}>
        <h4 className={styles.Header}></h4>
        <p></p>
        <textarea
          rows="6"
          className={styles.Input}
          name="textToHighlight"
          value={textToHighlight}
          onChange={(event) =>
            this.setState({ textToHighlight: event.target.value })
          }
        />

        <h4 className={styles.Header}>
          If a pore-clogging ingredient is found it will be highlighted below.
        </h4>

        <Highlighter
          activeClassName={styles.Active}
          activeIndex={activeIndex}
          caseSensitive={caseSensitive}
          highlightClassName={styles.Highlight}
          highlightStyle={{ fontWeight: "normal" }}
          sanitize={latinize}
          searchWords={searchWords}
          textToHighlight={textToHighlight}
        />
      </div>
    );
  }
}
