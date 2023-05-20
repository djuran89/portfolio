import IPhone from "@/components/iPhone/iPhone";

function WorkPreview() {
	return (
		<section className="flex justify-center items-center min-h-screen lg:flex-row flex-col gap-6 lg:gap-0">
			<IPhone url="https://korisnaknjiga.com" add={-500} />
			<IPhone url="http://3.75.204.76/?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSZXN0YXVyYW50IjoiNjJiMzY0Y2FhZTdkNjIzYjRjMjdiYWIxIiwiVGFibGUiOiI2MmIzNjU1ZDc0MGZjYzc4ZjZiYzk3MmQiLCJUaW1lIjoxNjg0NTQxOTcwMjM5LCJpYXQiOjE2ODQ1NDE5NzB9.-fQUjUmWZ8rjx2xBhu6ReSKxwTy54fJy_35IXT7paKU" add={-450} />
			<IPhone url="http://18.198.41.196" add={-400} />
			<IPhone url="http://18.193.224.96" add={-350} />
		</section>
	);
}

export default WorkPreview;
