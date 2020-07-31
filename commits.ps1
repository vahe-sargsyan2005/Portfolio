# Начало и конец периода
$startDate = Get-Date "2020-01-01"
$endDate   = Get-Date "2025-08-31"

$currentDate = $startDate

while ($currentDate -le $endDate) {
    # День недели (1 = воскресенье, 7 = суббота)
    $dayOfWeek = [int]$currentDate.DayOfWeek

    # Если будний день (понедельник=1 .. пятница=5)
    if ($dayOfWeek -ge 1 -and $dayOfWeek -le 5) {
        $dateStr = $currentDate.ToString("ddd MMM dd HH:mm:ss yyyy K")

        git commit --allow-empty -m "Commit for $($currentDate.ToString("yyyy-MM-dd"))" `
            --date "$dateStr" `
            --author="YourName <your@email.com>" `
            --no-gpg-sign

        # Чтобы автор и коммиттер совпадали
        $env:GIT_AUTHOR_DATE    = $dateStr
        $env:GIT_COMMITTER_DATE = $dateStr
    }

    # Следующий день
    $currentDate = $currentDate.AddDays(1)
}

git push
