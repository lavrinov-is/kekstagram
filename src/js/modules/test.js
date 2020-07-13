const test = () => {
	const COUTN_PICTURES = 25
	const MockData = {
		COMMENTS: ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'],
		NAMES: ['Артем','Тамби','Алекс','Сеня','Джорджина'],
	}
	const pictureTmpl = document.querySelector('#picture').content.children[0];

	const getRandomComment = () => {
		let comments = []
			comments.push({
				avatar: `img/avatar-${window.utils.getRandomNumber(0, 6)}.svg`,
				message: MockData.COMMENTS[window.utils.getRandomNumber(0, MockData.COMMENTS.length - 1)],
				name: MockData.NAMES[window.utils.getRandomNumber(0, MockData.NAMES.length - 1)]
			})
		return comments
	}

	const createPictureDescObj = () => {
		let obj = []

		for (let i = 1; i <= COUTN_PICTURES; i++) {
			obj.push({
				url: `assets/files/${i}.jpg`,
				description: 'описание фотографии',
				likes: window.utils.getRandomNumber(15, 200),
				comments: getRandomComment()
			})
		}

		return obj;
	}

	const renderPicture = (pictureObj) => {
		const newPictureElement = pictureTmpl.cloneNode(true)
		let comment = pictureObj.comments[0].message

		newPictureElement.querySelector('img').src = pictureObj.url
		newPictureElement.querySelector('.picture__comments').textContent = comment
		newPictureElement.querySelector('.picture__likes').textContent = pictureObj.likes

		return newPictureElement
	}

	function addPicturesToList() {
		const pictureListElement = document.querySelector('.pictures');
		const fragmentPictures = document.createDocumentFragment();

		for (let i = 0; i < createPictureDescObj().length; i++) {
			fragmentPictures.append(renderPicture(createPictureDescObj()[i]))
		}

		return pictureListElement.append(fragmentPictures)
	}

	addPicturesToList()
}

export default test;
