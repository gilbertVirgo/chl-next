/**
 * @typedef {import("@prismicio/client").Content.ImageSlideshowSlice} ImageSlideshowSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlideshowSlice>} ImageSlideshowProps
 * @param {ImageSlideshowProps}
 */
const ImageSlideshow = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			Placeholder component for image_slideshow (variation:{" "}
			{slice.variation}) Slices
		</section>
	);
};

export default ImageSlideshow;
