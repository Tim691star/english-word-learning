function toggleAllMeanings() {
    const meanings = document.querySelectorAll('.meaning');
    const button = document.getElementById('toggle-all-btn');
    
    // 检查第一个释义的显示状态
    const isAnyMeaningVisible = meanings[0].style.visibility === 'visible';
    
    // 如果有释义已经显示，则隐藏所有释义；否则显示所有释义
    meanings.forEach(meaning => {
        if (isAnyMeaningVisible) {
            meaning.style.visibility = 'hidden'; // 隐藏
            meaning.style.opacity = '0'; // 使其透明
        } else {
            meaning.style.visibility = 'visible'; // 显示
            meaning.style.opacity = '1'; // 使其不透明
        }
    });
    
    // 更新按钮文字
    if (isAnyMeaningVisible) {
        button.textContent = '显示所有释义';
    } else {
        button.textContent = '隐藏所有释义';
    }
}
