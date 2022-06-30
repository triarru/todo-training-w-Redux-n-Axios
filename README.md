# Thái độ làm việc bắt buộc

- Chủ động - Tích cực
- Ham học hỏi, sẵn sàng học cái mới
- Sẵn sàng chia sẻ, giúp đỡ các bạn và mọi người

# Project Rules

- **Commit và Push** lên remote repository **mỗi ngày** (**Trước 18h00**), kể cả chưa làm xong feature.

- Daily hàng ngày trước 9h30' sáng trả lời các câu hỏi sau:

```
Hôm qua bạn đã làm gì?
Hôm nay bạn sẽ làm gì?
Khó khăn gặp phải và hướng giải quyết?
```

- Demo bài tập vào 13h30 thứ 7 hàng tuần

- Phải chủ động hỏi khi gặp khó khăn không giải quyết được. Thứ tự ưu tiên:
  1. Tự tìm kiếm trên internet trước
  2. Hỏi các bạn
  3. Hỏi trên group training
  4. Hỏi Trainer


- Tạo nhánh mới từ `todo-tutorial` cho bài tập Todo theo format: `<your-name>/<tutorial-name>` - đây sẽ là **nhánh chính** của bạn. Ví dụ:

```
git checkout -b duypd/todo
```

- Push nhánh chính của bạn lên remote repository. Ví dụ:

```
git push origin duypd/todo
```

- Tạo nhánh mới theo feature mà bạn đang làm từ nhánh chính. Ví dụ:

```
git checkout -b duypd/todo/integrate-api
```

- Làm việc trên nhánh theo feature, `add` thay đổi, `commit` rồi push lên remote repository

```
git add .

git commit -m "Integrate api get/edit/create/delete for todo app"

git push origin duypd/todo/integrate-api
```

- Tạo Pull request merge vào **nhánh chính** của bạn. Ghi rõ nội dung của thay đổi ở Pull Request Title.

- Trainer và các bạn cùng khóa sẽ review code và comment góp ý. **Comment "Done"** sau khi đã fix xong comment.

- Trường hợp có thay đổi như fix comment, update source code trên feature hiện tại, commit rồi push tiếp lên, không tạo pull request mới.

- **_Chú ý:_** **Commit và Push** lên remote repository **mỗi ngày** (**Trước 18h00**), kể cả chưa làm xong feature.

- Học thêm về git:
  - https://git-scm.com/book/en/v2
  - https://learngitbranching.js.org/?locale=vi


# TODO App 


- Todo list with CRUD functions
- Filter by status: All/Completed/Active
- Counter for each status. All: `3 active items / 10 items`; Completed: `7 completed items / 10 items`, Active: `3 active items / 10 items`.
- Add timing for each Items. Notify when it nearly the deadline (before deadline 1h)
- Style by yourself, do not use external UI lib like Material-UI, AntDesign...
	- Use SCSS or CSS Module
	- Can follow a design in the internet
	- Have to follow the principle in some example UI design theme. (Ex: https://element.eleme.io/#/en-US/theme/preview)
- Bonus (Optional): Add timing for each Items. Notify when it nearly the deadline (before deadline 1h)
- Should has great UI
- Integrate with BE (Can reuse Placeholder or create your own BE by using mockend)
- Recommend Library
- Redux basic (Without Redux toolkit to understand the main idea of Redux)
- Axios (Create axios instance)


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
