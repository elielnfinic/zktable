import Layout from "../../components/Layout";
import FormsList from "./components/FormsList";

export default function Home(){
    return (
        <Layout title="Your forms">
            <div>
                Start new form
            </div>

            <div>
                <FormsList/>
            </div>
        </Layout>
    )
}