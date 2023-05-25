import CardUpdate from "./Card-update";
import UpdateDetails from "./Card-update/update-details";

export default function ProductStock({ item }) {
  return (
    <>
      <CardUpdate item={item} key={item?.id} />
      <UpdateDetails data={item} key={item?.id} />
    </>
  );
}
