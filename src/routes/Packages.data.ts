import utilities from '../resources/Utilities.data';

const PackagesData = () => ({
  list: [...utilities],
});

export type PackagesDataProps = ReturnType<typeof PackagesData>;

export default PackagesData;
