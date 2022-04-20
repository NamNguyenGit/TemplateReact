import { Field, Form, Formik } from "formik";
import { useParams, useHistory } from "react-router-dom";
import GetPostDetailSelector from "../../redux/selectors/post/getPostDetailSelector";
import { MDBBtn } from "mdb-react-ui-kit";
import InputField from "../customField/InputField";
import * as Yup from "yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postDetail } from "redux/modules/post/actions";
//! Validate
const validateSchema = Yup.object().shape({
  id: Yup.string().required(<span>Id is required</span>),
  title: Yup.string().required(<span>Title is required</span>),
});

const PostDetail = () => {
  //! Define
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const todo = GetPostDetailSelector();
  const { data, loading, error } = todo;

  //! Functions
  const handleOnClick = () => {
    history.push("/");
  };

  
  //! State
  useEffect(() => {
    dispatch(postDetail({ id }));
  }, [dispatch, id]);

  //! Render
  if (loading) {
    return "Loading...";
  }
  return (
    <div>
      <Formik
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={validateSchema}
        enableReinitialize
        initialValues={{
          id: data?.id || "",
          title: data?.title || "",
        }}
      >
        {(helperFormik) => {
          return (
            <Form>
              <Field
                component={InputField}
                name="id"
                type="number"
                placeholder="ID"
              />
              <Field
                component={InputField}
                name="title"
                type="text"
                placeholder="title"
              />
              <MDBBtn onClick={handleOnClick} color="danger">
                Go Back
              </MDBBtn>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default PostDetail;
