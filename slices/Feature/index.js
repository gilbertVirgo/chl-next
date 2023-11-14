/**
 * @typedef {import("@prismicio/client").Content.FeatureSlice} FeatureSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureSlice>} FeatureProps
 * @param {FeatureProps}
 */
const Feature = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			Placeholder component for feature (variation: {slice.variation})
			Slices
		</section>
	);
};

export default Feature;
