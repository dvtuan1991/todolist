export interface ButtonType {
	className: string;
	children: React.ReactNode;
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
}