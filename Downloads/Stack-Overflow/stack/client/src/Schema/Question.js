import * as Yup from "yup";

const QuesSchema = Yup.object().shape({
  title: Yup.string().required("Title is required."),
  description: Yup.string().required("Description is required."),
  tags: Yup.string().strict(true).trim().required("Tags is required."),
});
export default QuesSchema;
