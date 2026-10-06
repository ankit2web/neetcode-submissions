class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            // Skip non-alphanumeric characters from the left
            while (left < right && !this.isAlphaNumeric(s[left])) {
                left++;
            }
            // Skip non-alphanumeric characters from the right
            while (left < right && !this.isAlphaNumeric(s[right])) {
                right--;
            }

            // Compare characters case-insensitively
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    // Helper using character codes for O(1) space/time check
    isAlphaNumeric(char) {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) ||  // 0-9
            (code >= 65 && code <= 90) ||  // A-Z
            (code >= 97 && code <= 122)    // a-z
        );
    }
}