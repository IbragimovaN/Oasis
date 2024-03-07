import { useState } from "react";
import { DropdownSubMenu } from "./menu-components/dropdown-sub-menu/Dropdown-sub-menu";
import styles from "./Menu.module.css";
import { MenuItem } from "./menu-components/menu-item/Menu-item";

export const Menu = () => {
	const menu = [
		{
			id: "face",
			name: "лицо",
			children: [
				{ id: "mask", name: "маски" },
				{ id: "cream", name: "кремы" },
				{ id: "tonic&lotion", name: "лосьоны и тоники" },
			],
		},
		{
			id: "body",
			name: "тело",
			children: [
				{ id: "cream_body", name: "кремы для тела" },
				{ id: "scrub", name: "скрабы" },
			],
		},
		{
			id: "hair",
			name: "волосы",
			children: [
				{ id: "shampoo", name: "шампуни" },
				{ id: "balsam", name: "бальзамы" },
			],
		},
		{
			id: "forMan",
			name: "для мужчин",
			children: [
				{ id: "deodorantMan", name: "дезодоранты" },
				{ id: "showerGellMan", name: "гели для душа" },
				{ id: "shampooMan", name: "шампуни" },
			],
		},
	];
	return (
		<nav className={styles.menu}>
			<ul className={styles.list}>
				{menu.map((item) => (
					<MenuItem key={item.id} item={item}></MenuItem>
				))}
			</ul>
		</nav>
	);
};
