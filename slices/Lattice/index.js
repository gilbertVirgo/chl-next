/**
 * @typedef {import("@prismicio/client").Content.CardColumnsSlice} CardColumnsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CardColumnsSlice>} CardColumnsProps
 * @param {CardColumnsProps}
 */
const CardColumns = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			Placeholder component for card_columns (variation: {slice.variation}
			) Slices
		</section>
	);
};

export default CardColumns;
