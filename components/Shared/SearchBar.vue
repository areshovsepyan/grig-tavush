<template>
  <div class="search-box">
    <button class="btn-search">
      <svg width="23" height="23" viewBox="0 0 20 20">
        <path
          d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
          stroke="white"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
    <input
      type="text"
      class="input-search"
      placeholder=" Որոնել..."
    />
  </div>
</template>

<style scoped>
.search-box {
  width: fit-content;
  height: fit-content;
  position: relative;
}
.input-search {
  height: 20px;
  width: 100px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 13px;
  transition: all 0.5s ease-in-out;
  background-color: #032a35;
  padding-right: 40px;
  color: #fff;
}
.input-search::placeholder {
  color: white;
  opacity: 0.5;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 100;
}
.btn-search {
  width: 25px;
  height: 42px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 14px;
  background-color: transparent;
  pointer-events: painted;
}
.btn-search:focus ~ .input-search {
  width: 200px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1.5px solid #00dc81;
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
.input-search:focus {
  width: 200px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1.5px solid #00dc81;
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
</style>
