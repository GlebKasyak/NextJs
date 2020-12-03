import Link from "next/link";

import { HOME } from "../shared/routers";
import { MainLayout } from "../components";
import classes from "../styles/404.module.scss";

export default () => (
    <MainLayout title="404">
        <h1 className={classes.page404} >404 - Page Not Found</h1>
        <p>Please <Link href={HOME} ><a>got back</a></Link> to safety</p>
    </MainLayout>
)