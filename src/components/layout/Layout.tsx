import type React from "react";
import { Outlet } from "react-router";

export default function Layout() {
	return <main>
		<Outlet />
	</main>
}
